(function registerKnowledgePreviews() {
  const { CMS, createClass, h } = window;

  if (!CMS || !createClass || !h) return;

  const authorNames = {
    anna: "Anna Strus",
    pawel: "Paweł Strus",
    "anna-i-pawel": "Anna i Paweł",
    admin: "Administrator",
  };

  function formatDate(value) {
    if (!value) return "";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    return date.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function listValues(value) {
    if (!value) return [];
    if (typeof value.toArray === "function") return value.toArray();
    return Array.isArray(value) ? value : [value];
  }

  function resolveImageSource(image, getAsset, field) {
    if (typeof image !== "string" || !image) return "";

    const normalizedImage = image.replace(/^\/public(?=\/)/, "");
    const isExternalImage = /^(?:https?:)?\/\//.test(normalizedImage);
    const isBrowserImage = /^(?:blob|data):/.test(normalizedImage);
    const isPersistedPublicImage =
      normalizedImage.startsWith("/") &&
      !normalizedImage.startsWith("/images/uploads/");

    // getAsset jest potrzebne dla nowych uploadów, zanim plik trafi na dysk.
    // Istniejące obrazy publiczne (np. /images/legacy/...) muszą zachować swój
    // adres URL, inaczej Decap szuka ich błędnie w media_folder.
    if (isExternalImage || isBrowserImage || isPersistedPublicImage) {
      return normalizedImage;
    }

    const asset = getAsset(normalizedImage, field);
    return asset ? asset.toString() : normalizedImage;
  }

  function registerPublicImageWidget() {
    const imageWidget = CMS.getWidget("image");
    if (!imageWidget) return;

    const PublicImageControl = createClass({
      render() {
        const getAsset = (value, field) =>
          resolveImageSource(value, this.props.getAsset, field);

        return h(imageWidget.control, { ...this.props, getAsset });
      },
    });

    const PublicImagePreview = createClass({
      render() {
        const src = resolveImageSource(
          this.props.value,
          this.props.getAsset,
          this.props.field,
        );

        return src
          ? h("img", {
              src,
              alt: "",
              style: { display: "block", maxWidth: "100%", height: "auto" },
            })
          : null;
      },
    });

    CMS.registerWidget(
      "public-image",
      PublicImageControl,
      PublicImagePreview,
      imageWidget.schema,
    );
  }

  function createKnowledgePreview(eyebrow) {
    return createClass({
      render() {
        const { entry, getAsset, widgetFor } = this.props;
        const title = entry.getIn(["data", "title"]) || "Tytuł wpisu";
        const description = entry.getIn(["data", "description"]);
        const date = formatDate(entry.getIn(["data", "date"]));
        const authorId = entry.getIn(["data", "author"]);
        const author = authorNames[authorId];
        const tags = listValues(entry.getIn(["data", "tags"])).filter(Boolean);
        const image = entry.getIn(["data", "image"]);
        const imageSrc = resolveImageSource(image, getAsset);
        const meta = [
          date && h("time", { key: "date" }, date),
          author && h("span", { key: "author" }, `Autor: ${author}`),
          tags.length > 0 && h("span", { key: "tags" }, tags.join(" · ")),
        ].filter(Boolean);

        return h(
          "article",
          { className: "cms-knowledge-preview" },
          h(
            "header",
            { className: "cms-knowledge-preview__header" },
            h("p", { className: "cms-knowledge-preview__eyebrow" }, eyebrow),
            h("h1", {}, title),
            description &&
              h("p", { className: "cms-knowledge-preview__description" }, description),
            meta.length > 0 &&
              h("div", { className: "cms-knowledge-preview__meta" }, meta),
          ),
          imageSrc &&
            h(
              "div",
              { className: "cms-knowledge-preview__cover" },
              h("img", { src: imageSrc, alt: "" }),
            ),
          h(
            "div",
            { className: "cms-knowledge-preview__body" },
            h("div", { className: "cms-knowledge-preview__prose" }, widgetFor("body")),
          ),
        );
      },
    });
  }

  registerPublicImageWidget();
  CMS.registerPreviewStyle("/admin/preview.css");
  CMS.registerPreviewTemplate("blog", createKnowledgePreview("Z bloga"));
  CMS.registerPreviewTemplate("news", createKnowledgePreview("Aktualności"));
})();
