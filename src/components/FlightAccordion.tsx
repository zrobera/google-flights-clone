import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export const FlightAccordion = ({ flight }: { flight: Flight }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Box display="flex" flexDirection="row" alignItems="center" width="100%">
                <Box flexGrow={1}>
                    <Typography variant="h6">
                        {flight.startTime} - {flight.endTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {flight.duration} • {flight.stops}
                    </Typography>
                </Box>
                <Box textAlign="right">
                    <Typography variant="h6" color="success.main">
                        {flight.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {flight.priceDetails}
                    </Typography>
                </Box>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
            <Box display="flex" flexDirection="column">
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Stops: {flight.stopsDetails}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    CO₂ Emissions: {flight.emissions}
                </Typography>
            </Box>
        </AccordionDetails>
    </Accordion>
);