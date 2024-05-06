import React from 'react'
import { Card } from "@material-tailwind/react";
import Typography from "./Typography";

interface TableProps {
  heads: string[]
  children: React.ReactNode
}

const Table = (props: TableProps) => {
  return (
    <Card
      className="h-full w-full overflow-scroll"
      placeholder={{}}
    >
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {props.heads.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head.charAt(0).toUpperCase() + head.slice(1)}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </Card>
  );
}

export default Table;