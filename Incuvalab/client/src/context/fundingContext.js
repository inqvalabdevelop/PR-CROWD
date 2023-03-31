import { useState, createContext, useContext, useEffect } from 'react'
import { getFundingTop3Request, getFundsRequests,
      getFundsAprobeRequests, aproveRequestsOfList, 
      moveRequestToBault, getFundsRequestsByCat,
      getFundsErasedRequests, getFundsCompletedRequests, 
      removeRequestFromBault, permanentDeleteRequest, 
      getFundingByIdRequest, getFundByNameRequest,
      putFundingRequest, createFundingRequest } from '../api/funding'

import { getCatRequests , getAllCategorysRequest} from '../api/categories'

import { createCommentRequest, getCommentsRequest,
     deleteCommentRequest } from '../api/comment'

import { setFollowedFundingRequest,
     getUserFollowedFundingRequest, userDonateFundingRequest } from '../api/user'

export const fundingContext = createContext()

export const useFunding = () => {
    const context = useContext(fundingContext)
    return context;
}

export const FundingProvider = ({ children }) => {
    const [postsFundingTop, setPostsFundingTop] = useState([])
    const [postsFunding, setPostsFunding] = useState([])
    const [postsToAprobe, setPostsToAprobe] = useState([])
    const [postsCatFund, setPostsCatFund] = useState([])
    const [postsToRecycle, setPostsRecycle] = useState([])
    const [postsCompleted, setPostsCompleted] = useState([])
    const [postsNamFund, setPostsNamFund] = useState([])

    const getFundingTop3 = async () => {
        const res = await getFundingTop3Request();
        setPostsFundingTop(res.data);
    }

    const getFunds = async () => {
        const res = await getFundsRequests()
        setPostsFunding(res.data)
    }

    const getFundsAprobe = async () => {
        const res = await getFundsAprobeRequests()
        setPostsToAprobe(res.data)
    }

    const publishFunding = async (id) => {
        const res = await aproveRequestsOfList(id);
        return res.data;
    }

    const moveFundingToBault = async (id) => {
        const res = await moveRequestToBault(id);
        return res.data;
    }

    const getPostsFundByCat = async (id) => {
        try {
            const res = await getFundsRequestsByCat(id);
            setPostsCatFund(res.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    const getPostsFundByNam = async (post) => {
        const res = await getFundByNameRequest(post);
        setPostsNamFund(res.data);
    };

    const getFundsRecycle = async () => {
        const res = await getFundsErasedRequests()
        setPostsRecycle(res.data)
    }

    const getFundsCompleted = async () => {
        const res = await getFundsCompletedRequests()
        setPostsCompleted(res.data)
    }

    const fundingOutBault = async (id) => {
        const res = await removeRequestFromBault(id);
        return res.data;
    }

    const deletePermanentFunding = async (id) => {
        const res = await permanentDeleteRequest(id);
        return res.data;
    }

    const getFundingById = async (idFunding) => {
        const res = await getFundingByIdRequest(idFunding);
        return res.data;
    }

    const updateFunding = async (funding) => {
        const res = await putFundingRequest(funding)
        return res.data;
    }

    const createFunding = async (funding) => {
        const res = await createFundingRequest(funding)
        return res.data;
    }

    useEffect(() => {
        getFundingTop3();
    }, [])

    useEffect(() => {
        getFundsCompleted();
    }, [])

    useEffect(() => {
        getFunds();
    }, [])

    useEffect(() => {
        getFundsAprobe();
    }, [])

    useEffect(() => {
        getFundsCompleted();
    }, [])

    useEffect(() => {
        getFundsRecycle();
    }, [])

    useEffect(() => {
        getPostsFundByNam();
    }, [])

    //Categories

    const [postsCat, setPostsCategories] = useState([])
    const [category, setCategorys] = useState([])

    const getCategories =  async () => {
        const res = await getCatRequests()
        setPostsCategories(res.data)
    }
    
    const getAllCategory = async () => {
        const res = await getAllCategorysRequest()
        setCategorys(res.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getAllCategory()
    }, [])


    //Commentarios

    const [postsComment, setPostsComment] = useState([])
    
    const createComment = async (comment) => {
        const res = await createCommentRequest(comment);
    
        if (res.data != null) {
          return res.status;
        }
      }
    
      const getComments = async (idFunding) => {
        const res = await getCommentsRequest(idFunding);
        return res.data;
      }
    
      const deleteCommentById = async (idComment) => {
        const res = await deleteCommentRequest(idComment);
        return res.data;
      }

      //Follow Funding

      const setFollowedFunding = async (userFunding) => {
        const res = await setFollowedFundingRequest(userFunding)
        return res.data
      }

      const getFollowedFunding = async (id) => {
        const res = await getUserFollowedFundingRequest(id)
        return res.data
      }

      //User
    const userDonateFunding = async (id) => {
        const res = await userDonateFundingRequest(id);
        return res.data;
    }

    return <fundingContext.Provider value={{
        getFundingTop3, postsFundingTop, setPostsFundingTop,
        postsFunding, setPostsFunding, getFunds, 
        getFundsAprobe, postsToAprobe, setPostsToAprobe,
        publishFunding, moveFundingToBault,
        postsCatFund, setPostsCatFund,
        getPostsFundByCat,
        getFundsRecycle,
        getFundsCompleted,
        postsToRecycle, setPostsRecycle,
        postsCompleted, setPostsCompleted,
        fundingOutBault,
        deletePermanentFunding, getFundingById,
        postsNamFund, setPostsNamFund,
        getPostsFundByNam,
        updateFunding,
        createFunding,

        postsCat, setPostsCategories,
        category, setCategorys,
        getCategories, getAllCategory,

        postsComment, setPostsComment,
        createComment,
        getComments,
        deleteCommentById,

        setFollowedFunding,
        getFollowedFunding,

        userDonateFunding
    }}>
        {children}

    </fundingContext.Provider>
}