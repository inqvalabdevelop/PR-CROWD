import { useState, createContext, useContext, useEffect } from 'react'
import { loginUserRequest, registerUserRequest, 
    getTypeUserRequest, userDonateFundingRequest,
    userListToEditRequest, deleteReqById, 
    getemailCoincidencesRequest, getNumberConfirmationRequest,
    setPasswordForgetRequest,
    getUserByIdRequest, getCountUserFollowedFundingRequest,
    getCountUserDonatedFundingRequest,
    getCountUserFundingRequest,
    setUpdateAccountInfoRequest, setUpdateUserRequest,
    getUserFollowedFundingRequest,
    getUserDonatedFundingRequest,
    getUserFundingRequest,
    registerAdminRequest} from '../api/user'

const userContext = createContext()

export const useUser = () => {
    const context = useContext(userContext)
    return context;
}

export const UserProvider = ({ children }) => {
    const [postsUser, setPostsUser] = useState([])
    const [postsUsersList, setPostsUsersToModify] = useState([])
    const [projects, setProjec] = useState([]);

    const loginUser = async (user) => {
        const res = await loginUserRequest(user);
        return res.data;
    }

    const registerUser = async (user) => {
        const res = await registerUserRequest(user);
    
        if (res.data != null) {
          const resLogin = await loginUserRequest(user);
          return resLogin.data;
        }
    }

    const getTypeUser = async (user) => {
        const res = await getTypeUserRequest(user);
        return res.data;
    }

    const userDonateFunding = async (id) => {
        const res = await userDonateFundingRequest(id);
        return res.data;
    }

    const getUsersToModify = async () => {
        const res = await userListToEditRequest()
        setPostsUsersToModify(res.data)
    }

    const deleteUserById = async (id) => {
        const res = await deleteReqById(id)
        return res.data;
    }

    const getemailCoincidences = async (emailSend) => {
        const res = await getemailCoincidencesRequest(emailSend);
        return res.data;
    }
    
      const getNumberConfirmation = async (emailSend) => {
        const res = await getNumberConfirmationRequest(emailSend);
        return res.data;
    }
    const setPasswordForget = async (user) => {
        const res = await setPasswordForgetRequest(user);
        return res.data;
    }

    const getUserById = async (id) => {
        const res = await getUserByIdRequest(id)
        return res.data
    }
    
    const getFollowedCount = async (id) => {
        const res = await getCountUserFollowedFundingRequest(id)
        return res.data
    }

    const getDonatedCount = async (id) => {
        const res = await getCountUserDonatedFundingRequest(id)
        return res.data
    }

    const getFollowedFunding = async (id) => {
        const res = await getUserFollowedFundingRequest(id)
        return res.data
    }
    
    const getDonatedFunding = async (id) => {
        const res = await getUserDonatedFundingRequest(id)
        return res.data
    }

    const getUserFunding = async (id) => {
        const res = await getUserFundingRequest(id)
        return res.data
    }
    
    const getUserFundingCount = async (id) => {
        const res = await getCountUserFundingRequest(id)
        return res.data
    }

    const setUpdateAccountInfo = async (id, user) => {
        const res = await setUpdateAccountInfoRequest(id , user);
        return res.data;
    }

    const setUpdateUser = async (id, user) => {
        const res = await setUpdateUserRequest(id,user);
        return res.data;
    }

    const registerAdmin = async (user) => {
        const res = await registerAdminRequest(user);
        return res.data;
      }

    useEffect(() => {
        getUsersToModify()
    }, [])

    return <userContext.Provider value={{
        loginUser, registerUser, getTypeUser,
        postsUser, setPostsUser, userDonateFunding,
        postsUsersList, setPostsUsersToModify,
        getUsersToModify, projects, setProjec, deleteUserById,
        getemailCoincidences,getNumberConfirmation,
        setPasswordForget,
        getUserById, getFollowedCount, 
        getDonatedCount, getUserFundingCount, 
        setUpdateAccountInfo,
        setUpdateUser,
        getFollowedFunding, getDonatedFunding, getUserFunding,
        registerAdmin
    }}>
        {children}
    </userContext.Provider>

}