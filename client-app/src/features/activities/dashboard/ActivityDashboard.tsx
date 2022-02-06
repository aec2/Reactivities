import { Grid, GridColumn } from "semantic-ui-react";
import React, { useEffect } from "react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial)
    return <LoadingComponent inverted={false} content={"Loading app"} />;

  return (
    <Grid>
      {" "}
      <GridColumn width="10">
        <ActivityList></ActivityList>
      </GridColumn>
      <GridColumn width="6">
        <h2>Activity Filters</h2>
      </GridColumn>
    </Grid>
  );
});
