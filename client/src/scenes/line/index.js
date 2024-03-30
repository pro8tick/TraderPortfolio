import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  const { period } = useParams();

  const subtitle = period ? `${period}-Data` : "Default Data";

  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle={subtitle} />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
