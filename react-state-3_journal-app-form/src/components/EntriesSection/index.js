import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment, useState } from "react";

export default function EntriesSection({ entries }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entries, index) => (
          <Fragment key={entries.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entries.date}
              motto={entries.motto}
              notes={entries.notes}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
