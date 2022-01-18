import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Dynamic } from '@/generated/graphql';

interface Props {
  data?: Dynamic[];
}

export default function DynamicList({ data }: Props) {
  return (
    <Box sx={{ p: 2 }}>
      {data?.map((i) => {
        return (
          <div key={i._id}>
            <Paper sx={{ mb: 2, p: 2 }}>
              <p>{i.content}</p>
            </Paper>
          </div>
        );
      })}
    </Box>
  );
}
