const getQueryParams = () => {
  return new URLSearchParams(window.location.search)
}

export const getQueryParamsArray = (key) => {
  const queryParams = getQueryParams()
  const paramsString = queryParams.get(key)
  const params = paramsString ? paramsString.split(',') : []

  return params
}

export const createNewQuery = (newParams) => {
  const queryParams = getQueryParams()

  if (newParams && Object.keys(newParams).length > 0) {
    Object.keys(newParams).forEach((paramKey) => {
      if (queryParams.has(paramKey)) {
        if (Object.values(newParams)) {
          queryParams.set(Object.values(newParams))
        } else {
          queryParams.delete(paramKey)
        }
      } else {
        queryParams.append(paramKey)
      }
    })
  }

  return queryParams.toString()
}
