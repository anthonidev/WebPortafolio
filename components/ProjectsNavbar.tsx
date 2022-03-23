import React from 'react'
import { FunctionComponent } from 'react';
import { Category } from '../type';


export const NavItem:FunctionComponent<{ 
    value: Category | "all";
    handlerFilterCategory:Function ;
    active:string;
}> = ({ 
    value,
    handlerFilterCategory,
    active
 }) => {

    let className="cursor-pointer hover:text-green-500 capitalize "
    if(active===value)
        className+="text-green-500"
    return (
        <li onClick={()=>handlerFilterCategory(value)} className={className}>
            {value}
        </li>
    )
}


const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function,active:string }> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value='all' {...props}/>
            <NavItem value='react' {...props}/>
            <NavItem value='node' {...props}/>
            <NavItem value='express' {...props}/>
            <NavItem value='django' {...props}/>
            <NavItem value='mongo' {...props}/>
        </div>
    )
}

export default ProjectsNavbar