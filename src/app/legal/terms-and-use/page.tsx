import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { ReactNode } from "react";

const Page = () => {
  return (
    <>
      <Container sx={{ my: 16 }}>
        <Typography>
          Thank you for choosing Icreativv Consulting and Service (&quot;Icreativv,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Statement outlines our practices
          regarding the collection, use, and protection of your personal
          information when you use our services.
        </Typography>
        <Headline>Information We Collect</Headline>
        <Typography>
          We may collect personal information from you when you visit our
          website, engage with our services, or communicate with us. This
          information may include but is not limited to:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                "Contact details (such as name, email address, phone number)"
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={" Account information "} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Transaction details"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                "Usage data (such as IP addresses, browser type, and operating system)"
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Other information you choose to provide"} />
          </ListItem>
        </List>
        <Headline>How We Use Your Information</Headline>
        <Typography>
          Icreativv Consulting and Service uses your personal information for
          various purposes, including:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Providing and improving our services"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Personalizing your experience "} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Communicating with you "} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Processing transaction "} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={" Analyzing usage patterns"} />
          </ListItem>
        </List>
        <Headline>Sharing Your Information</Headline>
        <Typography>
          We do not sell your personal information to third parties. However, we
          may share your information with trusted service providers who assist
          us in delivering our services or conducting our business operations.
          We ensure that these third parties adhere to strict confidentiality
          and data protection standards.
        </Typography>

        <Headline>Your Choices</Headline>

        <Typography>
          You have the right to control how your personal information is used.
          You can:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Update or correct your information"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Opt-out of marketing communications"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SquareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={"Request the deletion of your account"} />
          </ListItem>
        </List>

        <Headline>Security</Headline>
        <Typography>
          Icreativv Consulting and Service takes the security of your personal
          information seriously. We implement appropriate measures to protect
          your data from unauthorized access, disclosure, alteration, and
          destruction.
        </Typography>
        <Headline>Updates to this Privacy Statement</Headline>
        <Typography>
          We may update this Privacy Statement to reflect changes in our
          practices or legal requirements. We encourage you to review this
          statement periodically for the latest information.
        </Typography>

        <Headline>Contact Us</Headline>
        <Typography>
          If you have any questions or concerns regarding your privacy or this
          Privacy Statement, please contact us at mail@icreativv.com. Thank you
          for entrusting your information to Icreativv Consulting and Service.
          We are committed to safeguarding your privacy and providing you with a
          secure and positive experience.
        </Typography>
      </Container>
    </>
  );
};

export default Page;

const Headline = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      variant="h4"
      gutterBottom
      fontFamily={'"Barlow Condensed", sans-serif'}
      fontWeight="bold"
      sx={{ mt: 4, mb: 2 }}
    >
      {children}
    </Typography>
  );
};
