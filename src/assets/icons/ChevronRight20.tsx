import { color } from "../../styles/theme";
import { IconProps } from "../../types/IconProps";

export function ChevronRight20({fill = color.Black.Solid}:IconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={fill} className="w-5 h-5">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
    )
}