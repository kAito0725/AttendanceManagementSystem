import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TimeCards from '../TimeCards/TimeCards';
import Calendars from '../Calendars/Calendars';
import './Tabs.css';

export default () => (
  <>
    <Tabs>
      <TabList>
        <Tab>Attendance TimeCards</Tab>
        <Tab>Calendar</Tab>
      </TabList>

      <TabPanel>
        <div className="Position">
          <h3>Director</h3>
        </div >
        <div className="Card">
          <TimeCards name="Test user" />
          <TimeCards name="Test user" />
        </div>
      </TabPanel>

      <TabPanel>
        <Calendars />
      </TabPanel>
    </Tabs>
  </>
);