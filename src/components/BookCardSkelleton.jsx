import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const BookCardSkelleton = () => {
  return (
    <div className="w-[180px]  lg:w-[250px]  mb-5 text-sm">
      <div>
        <Skeleton variant="rectangular" width={200} height={300} />
      </div>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton width="80%" />
        <Skeleton width="80%" />
        <Skeleton width="60%" />
      </Box>
    </div>
  );
};

export default BookCardSkelleton;
