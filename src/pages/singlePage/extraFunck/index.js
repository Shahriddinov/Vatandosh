export const getPaginationCount = (paginationData,type) => {
    let paginationCount = null 
    if(type === "projects") {
        paginationCount = Math.ceil(paginationData?.total / 8)
    }else {
        paginationCount = Math.ceil(paginationData?.total / 6)
    }

    return paginationCount
}