import Card from '../../../../component/card/Card'

import "./introSection.scss"
import { useSelector } from 'react-redux'
import { Paginator } from '../../../../component/Pagination/Pagination'
import { useSinglePaginationData } from '../../hooks/useSinglePaginationData'
import { Spinner } from '../../../../component'
import { getPaginationCount } from '../../extraFunck'

const IntroSection = () => {
    const {paginationLoading,paginationData,paginationFetching,type,pageUrl,page} = useSinglePaginationData()
    const lan = useSelector((state) => state.language.language);

    const paginationCount = getPaginationCount(paginationData,type)

    if(paginationLoading) {
        return (
            <div className="spinner_box">
              <Spinner/>
            </div>
        )
    }

    return (
        <div className='single-intro-section'>
            <div className="single-intro-section__container container">
                <div className="single-intro-section__inner">
                    {
                        
                        type === "projects" 
                        ? 
                            null
                        :
                        pageUrl === "categoryshows"
                        ?
                            <h3 className='single-intro-section__title'>Turkum ko'rsatuvlar</h3>
                        :
                            <h3 className='single-intro-section__title'>Jamoat birlashmalar tadbirlari</h3>
                        
                    }

                    {
                        paginationData?.total === 0 
                        ? <p className="">Ma'lumot mavjud emas </p>
                        :(
                            <>
                                <ul className={`${type === "projects" ? "single-intro-section__project_list" : "single-intro-section__compatriots_list"} `}>
                                    {
                                        paginationData["0"].data?.map(el => (
                                            <li className="single-intro-section__item" key={el.id}>
                                                <Card {...el}/>
                                            </li>
                                        ))
                                    }
                                </ul>
                                {
                                    paginationCount >= 2
                                    ? <Paginator page={page} paginationFetching = {paginationFetching} count = {paginationCount}/>
                                    : null
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default IntroSection