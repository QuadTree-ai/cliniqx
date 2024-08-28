import React from 'react';
import { products } from './Products'; // Assume the dummy data is in a separate file
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoveHorizontalIcon } from '@/components/icons';

const ProductsPage = () => {
  return (
    <Card>
      <CardHeader>
          <CardTitle className="text-lg">Products</CardTitle>
          <CardDescription className="text-sm">Manage your products and view their sales performance.</CardDescription>
        <Button variant="default">Add Product</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell text-sm">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="text-sm">Name</TableHead>
              <TableHead className="text-sm">Status</TableHead>
              <TableHead className="hidden md:table-cell text-sm">Price</TableHead>
              <TableHead className="hidden md:table-cell text-sm">Total Sales</TableHead>
              <TableHead className="hidden md:table-cell text-sm">Created at</TableHead>
              <TableHead className="text-sm">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt={product.name}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.image}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium text-sm">{product.name}</TableCell>
                <TableCell className="text-sm">
                  <Badge variant={product.status === 'Active' ? 'outline' : 'secondary'}>{product.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm">{product.price}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">{product.totalSales}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">{product.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoveHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
        <Button variant="ghost">Previous</Button>
        <Button variant="ghost">Next</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsPage;
