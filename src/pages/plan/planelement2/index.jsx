import React from "react";
import '../planelement2/style.css';
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

const PlanElement2 = () => {


    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };


    return(
        <div className="element2-container">
            <div className="mini-container">


                <div className="left-sidebar">
                    <div className="left-sidebar-box">
                        <h5 className="h4">01</h5>
                        <h5 className="h5">Preferences</h5>
                    </div>
                    <div className="left-sidebar-box">
                        <h5 className="h4">02</h5>
                        <h5 className="h5">Bean Type</h5>
                    </div>
                    <div className="left-sidebar-box">
                        <h5 className="h4">03</h5>
                        <h5 className="h5">Quantity</h5>
                    </div>
                    <div className="left-sidebar-box">
                        <h5 className="h4">04</h5>
                        <h5 className="h5">Grind Option</h5>
                    </div>
                    <div className="left-sidebar-box">
                        <h5 className="h4">05</h5>
                        <h5 className="h5">Deliveries</h5>
                    </div>
                </div>


                <div className="right-sidebar"> 

                <div>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader className="abdulloh" targetId="1">How do you drink your coffee?</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="abdulloh" targetId="2">What type of coffee?</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="abdulloh" targetId="3">How much would you like?</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="abdulloh" targetId="4">What type of coffee?</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="abdulloh" targetId="5">What type of coffee?</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

                </div>
            </div>
        </div>




    );
};

export default PlanElement2;