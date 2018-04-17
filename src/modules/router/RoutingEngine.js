import {Router} from './Router';
import find from 'lodash/find';


const routers = [];

export const addRouter = (router) => {
    if (router instanceof Router) {
        routers.push(router);
    }
};

export const removeRouter = (router) => {
    if (router instanceof Router) {
        let routerToRemoveIndex = 0;
        const routerToRemove = find(routers, (routerItem, index) => {
            routerToRemoveIndex = index;
            return routerItem.getRouterId() === router.getRouterId();
        });
        if (routerToRemove) {
            routers.splice(routerToRemoveIndex, 1);
        }
    }
};

export const callUrlChange = () => {
    routers.forEach((router) => {
        router.onUrlChanged();
    })
};


window.addEventListener('popstate', callUrlChange);
