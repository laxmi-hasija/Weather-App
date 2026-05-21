import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Infobox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';


export default function Infobox({info}) {
  const DustyImageUrl = import.meta.env.VITE_DUSTYWEATHER_IMAGE_URL;
    const HotImageUrl = import.meta.env.VITE_HOTWEATHER_IMAGE_URL;
    const ColdImageUrl= import.meta.env.VITE_COLDWEATHER_IMAGE_URL;
    const RainyImageUrl= import.meta.env.VITE_RAINYWEATHER_IMAGE_URL;
    const City= info.city;



   
  return (
    <div className="infobox">
      
        <div className="CardInfo">
        <Card className= "Card"   sx={{
    maxWidth: 345,
    borderRadius: "14px",
    boxShadow: "0 4px 15px rgba(59,130,246,0.25)",
    overflow: "hidden"
  }}

>
          <CardMedia
            sx={{ height: 140 }}
            image={ info.humidity > 80 ? RainyImageUrl: info.temp < 20 ? ColdImageUrl : HotImageUrl
          }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { City } {info.humidity > 80 ? <ThunderstormSharpIcon/> : info.temp < 20 ?  < AcUnitIcon/>:<LightModeSharpIcon/> }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p> Temperature = {info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p> Max Temp={info.tempmax}&deg;C</p>
              <p> Min Temp={info.tempmin}&deg;C</p>
              <p>
                The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
        </div>
     
    </div>
  );
}
