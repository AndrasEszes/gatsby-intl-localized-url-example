const trim = require("./src/lib/trim")

exports.onCreatePage = ({ page, actions }) => {
  const { path: oldPath, context } = page
  const { deletePage, createPage } = actions
  const { language, intl } = context
  const { messages } = intl

  const rawOldPath = oldPath.replace(`/${language}/`, ``).replace(".html", "")
  const oldPathKey = trim(rawOldPath, "/") || "index"
  const newPath = trim(messages[`${oldPathKey}.path`] || "", "/")

  if (newPath) {
    deletePage(page)
    createPage({
      ...page,
      path: oldPath.replace(oldPathKey, newPath),
    })
  }
}
