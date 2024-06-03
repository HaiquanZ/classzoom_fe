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
            CONFIRM_OTP: '/user/confirm-otp',
            SEARCH_USER: '/user/search'
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
            GET_MEMBERS_BY_POST: '/group/members-post',
            GET_DETAIL: '/group/detail',
            GET_FILE: '/group/file',
            DOWNLOAD_FILE: '/group/download',
            UPLOAD_FILE: '/group/file',
            DELETE_FILE: '/group/file',
            ADD_MEMBER: '/group/add-member',
            DELETE_MEMBER: '/group/member',
        },
        comment: {
            CREATE_COMMENT: '/comment',
            GET_COMMENT: '/comment'
        },
        post: {
            CREATE_POST: '/group/post/create',
            CREATE_ASSIGNMENT: '/assignment/create',
            GET_DETAIL_POST: '/group/post/detail',
            GET_TASK: '/assignment/task',
            GET_ASSIGNMENT_BY_USER: '/post/assignment',
            GET_DETAIL_ASSIGNMENT: '/assignment',
            CREATE_COMMENT: '/group/post/comment',
            GET_POST_BY_GROUPID: '/group/post',
            UPDATE_TIMELINE: '/assignment/phase/update',
            CREATE_TASK: '/assignment/task/create',
            UPDATE_TASK: '/assignment/task/update',
            GET_TASK_BY_PIC: '/assignment/task/pic'
        }
    }
};
