import { Box, Container, Grid, Typography } from "@mui/material";
import Noflights from "../assets/no-flight.jpg";
import { FlightAccordion } from "./FlightAccordion";

interface Flight {
  airlineLogos: string[];
  destination: string;
  price: string;
  startTime: string;
  endTime: string;
  duration: string;
  stops: string;
  stopsDetails: string;
  emissions: string;
  priceDetails: string;
}

const FlightsGrid = ({ flightsData }: { flightsData: Flight[] }) => {
  if (!flightsData || flightsData.length === 0) {
    return (
      <div>
        <Box display="flex" flexDirection="column" alignItems="center" mt={4} mb={4}>
          <img
            style={{ width: '50%', maxWidth: '600px', marginBottom: '20px' }}
            src={Noflights}
            alt="no-flights"
          />
          <Typography variant="h4" align="center" gutterBottom>
            No flights available
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary">
            Please try adjusting your search criteria or check back later.
          </Typography>
        </Box>
      </div>
    );
  }
  return (
    <Container>
      <Box my={4}>
        <Grid container spacing={4} justifyContent="center">
          {flightsData.map((flight: Flight, index: number) => (
            <Grid item xs={12} key={index}>
              <FlightAccordion flight={flight} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FlightsGrid;
