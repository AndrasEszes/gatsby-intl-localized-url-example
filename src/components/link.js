import React from "react"
import { Link as IntlLink, useIntl } from "gatsby-plugin-intl"

import trim from "../lib/trim"

const Link = ({ to, ...props }) => {
  const intl = useIntl()
  const id = `${trim(to, "/")}.path`

  return (
    <IntlLink
      {...props}
      to={`${intl.formatMessage({ id, defaultMessage: to })}`}
    />
  )
}

Link.propTypes = {
  ...IntlLink.propTypes,
}

Link.defaultProps = {
  ...IntlLink.defaultProps,
}

export default Link
