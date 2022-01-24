import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as MySchedule } from './Vector.svg';
import { ReactComponent as Dashboard } from './home.svg';
import { ReactComponent as TestPackage } from './test-package.svg';
import { ReactComponent as MyTestPackage } from './my-test-package.svg';
import { ReactComponent as TestPackageComponentIcon } from './testpackageicon.svg';
import { ReactComponent as AddToCart } from './add-to-cart.svg';
import { ReactComponent as Expand } from './expand-icon.svg';
import { ReactComponent as More } from './more-icon.svg';



export function MyScheduleIcon(props){
    return(
        <SvgIcon {...props} component={MySchedule} fill={props.fill} viewBox="0 0 15 14" />
    )
}
export function DashboardIcon(props){
    return(
        <SvgIcon {...props} component={Dashboard} viewBox="0 0 15 14" />
    )
}
export function TestPackageIcon(props){
    return(
        <SvgIcon {...props} component={TestPackage} fill={props.fill} viewBox="0 0 15 12" />
    )
}
export function MyTestPackageIcon(props){
    return(
        <SvgIcon {...props} component={MyTestPackage} fill={props.fill} viewBox="0 0 15 14" />
    )
}
export function TestPackageListIcon(props){
    return(
        <SvgIcon {...props} component={TestPackageComponentIcon} fill={props.fill} viewBox="0 0 26 26" />
    )
}

export function AddToCartIcon(props){
    return(
        <SvgIcon {...props} component={AddToCart} fill={props.fill} viewBox="0 0 20 18" />
    )
}
export function ExpandIcon(props){
    return(
        <SvgIcon {...props} component={Expand} fill={props.fill} viewBox="0 0 16 18" />
    )
}
export function MoreIcon(props){
    return(
        <SvgIcon {...props} component={More} fill={props.fill} viewBox="0 0 20 4" />
    )
}



