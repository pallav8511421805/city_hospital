import React from 'react';

function List({data}) {
    return (
        <table width="600px" align="center" cellSpacing="0" cellPadding="0" className='my-4'>
            <tr>
              <th className='text-center'>ID</th>
              <th className='text-center'>NAME</th>
              <th className='text-center'>QUANTITY</th>
              <th className='text-center'>PRICE</th>
              <th className='text-center'>EXPIRY</th>
              <th className='text-center'>TOTAL</th>
            </tr>
            { 
           data.map((d, i) => { 
             return ( 
               <tr key={i}> 
                 <td className='text-center'>{d.id}</td> 
                 <td className='text-center'>{d.name}</td> 
                 <td className='text-center'>{d.quantity}</td> 
                 <td className='text-center'>{d.price}</td> 
                 <td className='text-center'>{d.expiry}</td>
                 <td className='text-center'>{d.expiry}</td> 
               </tr> 
             ) 
           }) 
         } 
            
        </table>
    );
}

export default List;