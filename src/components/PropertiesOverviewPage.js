import React from 'react';

const PropertyExplorerPage = () => (
<div className = "card mt-3">
	<div className = "card-header">
		<h2> Property Overview </h2>
	</div>
	<div className = "card-body">
			<h5 className = "card-title">Rent Roll</h5>
			<div id="accordion">
				<div className="card DanGracaTower">
					<div className="card-header" id="hOne">
						<h5 className="mb-0"><button className="btn btn-link" data-toggle="collapse" data-target="#one" aria-expanded="true" aria-controls="one">Dan Graca Tower</button></h5>
					</div>
					<div id="one" className="collapse show" aria-labelledby="one" data-parent="#accordion">
						<div className="card-body">
							<table className="table table-striped table-responsive">
								<thead>
									<tr>
										<th>Property ID</th>
										<th>Apartment</th>
										<th>Unit Type</th>
										<th>Unit ID</th>
										<th>Status</th>
										<th>Lease From Date</th>
										<th>Lease To Date</th>
										<th>Total Monthly Rent</th>
										<th>Rent Due</th>
										<th>Current Lease</th>
									</tr>
								</thead>
								<tbody>
									<tr>
											<td>DGT-250</td>
											<td>101</td>
											<td>2BR/2BA</td>
											<td><a href="unithistory.html">DGT-250_101_2BR/2BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>31-Dec-18</td>
											<td>3500</td>
											<td>0</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>102</td>
											<td>2BR/1BA</td>
											<td><a href="unithistory.html">DGT-250_102_2BR/1BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>31-Dec-18</td>
											<td>3200</td>
											<td>0</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>103</td>
											<td>2BR/2BA</td>
											<td><a href="unithistory.html">DGT-250_103_2BR/2BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>31-Dec-18</td>
											<td>3000</td>
											<td>0</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>104</td>
											<td>2BR/2BA</td>
											<td><a href="unithistory.html">DGT-250_104_2BR/2BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>30-Jun-18</td>
											<td>2500</td>
											<td>5000</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>131</td>
											<td>2BR/2BA</td>
											<td><a href="unithistory.html">DGT-250_131_2BR/2BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>31-Dec-18</td>
											<td>2500</td>
											<td>5000</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>132</td>
											<td>1BR/1BA</td>
											<td><a href="unithistory.html">DGT-250_132_1BR/1BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>31-Dec-18</td>
											<td>2200</td>
											<td>0</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>133</td>
											<td>2BR/1BA</td>
											<td><a href="unithistory.html">DGT-250_133_2BR/1BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>30-Jun-18</td>
											<td>3200</td>
											<td>0</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr>
											<td>DGT-250</td>
											<td>134</td>
											<td>2BR/2BA</td>
											<td><a href="unithistory.html">DGT-250_134_2BR/2BA</a></td>
											<td>Occupied</td>
											<td>1-Jan-18</td>
											<td>31-Dec-18</td>
											<td>3000</td>
											<td>0</td>
											<td><a href="leases/1.pdf">View Lease <i className="fa fa-external-link"></i></a></td>
									</tr>
									<tr className="table-warning">
										<td>DGT-250</td>
										<td>134</td>
										<td>2BR/2BA</td>
										<td><a href="unithistory.html">DGT-250_134_2BR/2BA</a></td>
										<td>Vacant</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td><a href="addlease.html">Add Lease</a></td>
									</tr>
									<tr className="border border-primary font-weight-bold">
										<td colSpan={3}>Subtotals</td>
										<td/>
										<td colSpan={3}>97%</td>
										<td>93900</td>
										<td>40000</td>
										<td/>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default PropertyExplorerPage;