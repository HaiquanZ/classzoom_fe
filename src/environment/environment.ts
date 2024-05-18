export const environment = {
    server: {
        apiUrl: 'http://localhost:8000',
    },
    path: {
        auth: {
            GET_USER: '/user',
            LOGIN: '/user/login',
            REGISTER: '/user/register',
            FORGOT_PASSWORD: '/user/forgot-password',
            CONFIRM_OTP: '/user/confirm-otp'
        },
        calendar: {
            GET_NOTE_MONTH: '/user/calendar/month',
            GET_NOTE_DAY: '/user/calendar/day',
            CREATE_NOTE: '/user/calendar/create',
            UPDATE_NOTE: '/user/calendar/update',
            DELETE_NOTE: '/user/calendar'
        },
        group: {
            GET_ALL_GROUPS: '/group',
            CREATE_GROUP: '/group/create',
            DELETE_GROUP: '/group',
            GET_MEMBERS: '/groups',
            ADD_MEMBER: '/group/member',
            GET_DETAIL: '/group/detail'
        },
        comment: {
            CREATE_COMMENT: '/comment',
            GET_COMMENT: '/comment'
        },
        post: {
            CREATE_POST: '/group/post/create',
            GET_DETAIL_POST: '/group/post/detail',
            GET_ASSIGNMENT_BY_USER: '/post/assignment',
            GET_DETAIL_ASSIGNMENT: '/post/assignment',
            CREATE_COMMENT: '/group/post/comment',
            GET_POST_BY_GROUPID: '/group/post'
        }
    }
};
