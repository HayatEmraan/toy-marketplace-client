import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabsData from "../TabsData/TabsData";
import SubTabsData from "../TabsData/SubTabsData";

const TabsComponents = () => {
  return (
    <div className="container mx-auto my-12">
      <Tabs>
        <TabList className="tab lg:gap-6 my-4">
          <Tab className="tab tab-lifted tab-active">ALL TOYS</Tab>
          <Tab className="tab tab-lifted">DISNEY</Tab>
          <Tab className="tab tab-lifted">CAR</Tab>
          <Tab className="tab tab-lifted">ROBOT</Tab>
          <Tab className="tab tab-lifted hidden lg:block">MARVEL</Tab>
        </TabList>
        <TabPanel>
          <TabsData />
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList className="tab gap-4">
              <Tab className="tab tab-bordered">ALL</Tab>
              <Tab className="tab tab-bordered">DISNEY GIRLS</Tab>
              <Tab className="tab tab-bordered">DISNEY BOY</Tab>
            </TabList>
            <TabPanel>
              <TabsData props={"Disney"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"DisneyGirls"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"DisneyBoys"} />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList className="tab gap-4">
              <Tab className="tab tab-bordered">ALL</Tab>
              <Tab className="tab tab-bordered">GENERAL CAR</Tab>
              <Tab className="tab tab-bordered">SMARTCAR</Tab>
            </TabList>
            <TabPanel>
              <TabsData props={"Car"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"GeneralCar"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"SmartCar"} />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList className="tab gap-4">
              <Tab className="tab tab-bordered">ALL</Tab>
              <Tab className="tab tab-bordered">PINATA</Tab>
              <Tab className="tab tab-bordered">ARM EDGE</Tab>
              <Tab className="tab tab-bordered hidden lg:block">
                TRANSFORMER
              </Tab>
            </TabList>
            <TabPanel>
              <TabsData props={"Robot"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"Pinata"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"Arm Edge"} />
            </TabPanel>
            <TabPanel>
              <SubTabsData props={"Transformers"} />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <TabsData props={"Marvel"} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponents;
