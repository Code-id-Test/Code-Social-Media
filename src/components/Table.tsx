import React from 'react'
import Typography from "./Typography";

interface TableProps {
  heads: string[]
  children: React.ReactNode
}

const Table = (props: TableProps) => {
  return (
    <div
      className="h-full w-full relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gray-600"
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            {props.heads.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  );
}

export default Table;