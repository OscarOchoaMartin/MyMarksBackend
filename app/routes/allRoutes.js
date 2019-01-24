'use strict';
import userRoutes from './userRoutes';
import subjectRoutes from './subjectRoutes';
//import taskRoutes from './taskRoutes';

function init(app) {
    userRoutes(app);
    subjectRoutes(app);
    //taskRoutes(app);
}

export default init;
