export const environment = {
    server: {
        apiUrl: 'http://localhost:8000',
    },
    path: {
        auth: {
            LOGIN: '/user/login',
            REGISTER: '/user/register',
            FORGOT_PASSWORD: '/user/forgot-password',
            CONFIRM_OTP: '/user/confirm-otp'
        },
        group: {
            GET_ALL_GROUPS: '/group',
            CREATE_GROUP: '/group/create',
            DELETE_GROUP: '/group',
            GET_MEMBERS: '/groups',
            ADD_MEMBER: '/group/member'
        },
        comment: {
            CREATE_COMMENT: '/comment',
            GET_COMMENT: '/comment'
        },
        post: {
            CREATE_POST: '/post/create',
            GET_ASSIGNMENT_BY_USER: '/post/assignment',
            GET_DETAIL_ASSIGNMENT: '/post/assignment',
            SUBMIT_ANSWER: '/post/answer',
            GET_ANSWER_USER: '/post/answer',
            GET_ANSWER_ASSIGNMENT: '/post/answer-all',
            GET_FILE: '/post/answer-file',
            GET_POST_BY_GROUPID: '/post'
        }
    }
};
