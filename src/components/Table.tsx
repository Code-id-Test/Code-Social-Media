import { Card } from "@material-tailwind/react";
import Typography from "./Typography";

interface TableProps {
  heads: string[]
  rows: any
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
          {props.rows.map(({ id, name, username, email, address, phone, website, company }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {id ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {username ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {email ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}` ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {phone ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {website ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {company.name ?? '-'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Table;