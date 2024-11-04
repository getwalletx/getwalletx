import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";

const features = [
  {
    name: "Single Click Onboarding",
    walletX: true,
    metaMask: false,
    rainbow: false,
  },
  {
    name: "Gasless Transactions",
    walletX: true,
    metaMask: false,
    rainbow: false,
  },
  {
    name: "Batch Transactions",
    walletX: true,
    metaMask: false,
    rainbow: false,
  },
  { name: "Gasless Swaps", walletX: true, metaMask: false, rainbow: false },
  { name: "NFTs", walletX: true, metaMask: true, rainbow: true },
  { name: "On/Off Ramp", walletX: true, metaMask: true, rainbow: true },
];

export function ComparisonChart() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Feature</TableHead>
            <TableHead className="text-center">WalletX</TableHead>
            <TableHead className="text-center">MetaMask</TableHead>
            <TableHead className="text-center">Rainbow</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell className="text-center">
                {feature.walletX ? (
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.metaMask ? (
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.rainbow ? (
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500 mx-auto" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
