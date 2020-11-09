import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createNewQuery } from '~/helpers/query'

const RedirectHandler = ({ activeParameters }) => {
  const [initialLoad, setinitialLoad] = useState(true)

  const createRedirect = (query) => {
    if (initialLoad) {
      setinitialLoad(false)
    } else {
      const query = createNewQuery(activeParameters)
      return <Redirect to={`/products${query}`} />
    }
  }

  return <>{createRedirect()}</>
}

export default RedirectHandler
