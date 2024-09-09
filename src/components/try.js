{/* <p className="text-white ml-4 money">{income}</p>

<div style={{position:'relative',right:'400px'}} className="text-white ml-4 money">${amount}</div>

//therd
<p className='my-3'>Stock Name</p>
                            <p className='my-3'>Qunatity</p>
                            <p className='my-3'>Investment Amount</p>
                            <p className='my-3'>Market Price</p>
                            <p className='my-3'>Avg Price</p>
                            <p className='my-3'>Profit/Loss</p>



                            {reasult.map((e, index) => {
                                
                                if (e.number !== 0) {
                                    let incomee=a.myobj[e.name]-e.average;
                                    incomee=incomee*e.number;
                                    return (
                                        <div className='my-2' style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-evenly',borderRadius:'8px' }}>
                                            <p className='my-3' style={{ color: 'white', position: 'relative', right: '10px' }}>{e.name}</p>
                                            <p className='my-3' style={{ color: 'white', position: 'relative', right: '5px' }}>{e.number}</p>
                                            <p className='my-3' style={{ color: 'white', position: 'relative', left: '24px' }}>{e.amount}</p>
                                            <p className='my-3' style={{ color: 'white', position: 'relative', left: '60px' }}>{a.myobj[e.name]}</p>
                                            <p className='my-3' style={{ color: 'white', position: 'relative', left: '60px' }}>{e.average}</p>
                                            <p className='my-3' style={{ color: 'white', position: 'relative', left: '40px' }}>${incomee<1 ? 0 :incomee}</p>
                                        </div>
                                            );
                                } else {
                                    return null;
                                    }
                                    })} */}






                                    {Object.values(reasult.allPayment).map((e, index) => (
                                        <tr >
                                            <td scope="row"> <span className="fa fa-briefcase mr-1"></span> {e.card} </td>
                                            <td><span className="fa fa-cc-visa"></span></td>
                                            <td className="text-muted">{e.Date}</td>
                                            <td className="d-flex justify-content-end align-items-center">
                                                <span className="fa fa-long-arrow-up mr-1"></span>{e.enteramount}
                                            </td>
                                        </tr>
                                    ))}