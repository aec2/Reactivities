import { Grid, GridColumn, List } from "semantic-ui-react";
import React from "react";
import { Activity } from "../../../app/models/activitiy";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid>
      {" "}
      <GridColumn width="10">
        <ActivityList activities={activities}></ActivityList>
      </GridColumn>
    </Grid>
  );
}
