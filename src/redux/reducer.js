import { PROJECTS } from '../shared/projects';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    projects: PROJECTS,
    comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};