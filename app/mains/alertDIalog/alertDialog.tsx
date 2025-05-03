'use client';
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import axios from "axios"
  
  export function AlertDialogDemo() {
    const [balance, setBalance] = useState(0)

    const handleSubmit = async () => {
      try{
        const res = await axios.post('/api/dashboard/balance', {
          balance
        })
      
        alert(res.data.message || 'Amount added')
      }catch(err: any){
        alert(err.res.data.message || "nice try diddy!")
      }
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="w-25 h-12">Add Money</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Don't trust us with your money</AlertDialogTitle>
            <Input placeholder="Enter the amount" type="number" value={balance} onChange={(e) => {setBalance(Number(e.target.value))}}/>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>ADD</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  export {
    AlertDialogAction
  }
  