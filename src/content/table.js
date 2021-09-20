import React from "react";
import Content1 from './content-1';
import Content2 from './content-2';
import Content3 from './content-3';
import './content.css';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
 
const Tab = ({ children }) => {
  const { onClick } = useTabState();
 
  return <button onClick={onClick}>{children}</button>;
};
 
const Panel = ({ children }) => {
  const isActive = usePanelState();
 
  return isActive ? <p>{children}</p> : null;
};
 
export default function TabList() {
  const [count, setCount] = React.useState('web');

  const handleChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <Tabs>
    <div
    value={count}
    onChange={handleChange}
    className="buttonSection">
      <Tab>Quem sou</Tab>
      <Tab>Certificados</Tab>
      <Tab>Conhecimento</Tab>
    </div>
 
    <Panel><Content1/></Panel>
    <Panel><Content2/></Panel>
    <Panel><Content3/></Panel>
  </Tabs>
  )
  
} 
