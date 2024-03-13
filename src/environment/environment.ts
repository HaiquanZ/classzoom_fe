export const environment = {
    server: {
        apiUrl: 'http://192.168.1.13:4000/api/v1',
    },
    path: {
        auth: {
            LOGIN: '/user/login',
            REGISTER: '/user/register'
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
