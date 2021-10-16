import React, { useRef, useState } from 'react'

export interface AccordionWidgetProps {
  heading: string,
  content: string
}

export const AccordionWidget = (props: AccordionWidgetProps) => {
  const { heading, content } = props;
  const [showPanel, setShowPanel] = useState(false);
  const panel = useRef(null);
  const togglePanel = () => {
    var currPanel: any = panel.current;

    showPanel ? currPanel.classList.remove('panel-open') : currPanel.classList.add('panel-open');

    setShowPanel(!showPanel);
  };

  return (
    <>
      <button className={`accordion ${showPanel ? 'active' : ''}`} onClick={togglePanel}>{heading}</button>
      <div className="panel" ref={panel} >
        <p>{content}</p>
      </div>
    </>
  )
}
