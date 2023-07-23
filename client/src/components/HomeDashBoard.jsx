import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
export default function HomeDashboard() {
    const data = [
        {
            name: "Page A",
            uv: 3000,
            pv: 3400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 2398,
            amt: 3210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 3800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3408,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 2890,
            pv: 3800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = date.toLocaleString('en-US', options)
        .replace(/(\d+)(st|nd|rd|th)/, '$1<sup>$2</sup>');

    return (<>

        <div className="title_bar_">
            <div className="text">
                <h3>Dashboard Overview</h3>
                <p>Today, {formattedDate}</p>
            </div>
            <div className="other">
                <div className="search">
                    <input type="text" placeholder="Search" name="search" id="search" />
                    <AiOutlineSearch className="icon" />
                </div>
                <BiBell className="title_icon" />
                <div className="account"></div>
            </div>
        </div>
        <div className="status">
            <div className="stat_one">
                <div className="icon_text">
                    <div className="icon"></div>
                    <div className="text">+32.45%</div>
                </div>
                <div className="money">$ 20,023.00</div>
                <div className="heading">Total Earning</div>
            </div>
            <div className="stat_one">
                <div className="icon_text">
                    <div className="icon"></div>
                    <div className="text">+32.45%</div>
                </div>
                <div className="money">$ 20,023.00</div>
                <div className="heading">Total Earning</div>
            </div>
            <div className="stat_one">
                <div className="icon_text">
                    <div className="icon"></div>
                    <div className="text">+32.45%</div>
                </div>
                <div className="money">$ 20,023.00</div>
                <div className="heading">Total Earning</div>
            </div>
            <div className="stat_four">
                <div className="circle_one"></div>
                <div className="circle_two"></div>
                <div className="text_plus">
                    Balance Summary <div className="plus"> <AiOutlinePlus></AiOutlinePlus></div>
                </div>
                <div className="stat_four_pay">
                    <div className="pay_container">
                        <h4>GoPay Balance</h4>
                        <p>{formattedDate}</p>
                    </div>
                    <div className="text">
                        $ 20,023
                        <div className="active">
                            Active Balance
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="chart_recent">

            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0A74FF" stopOpacity={0.5} />
                                <stop offset="45%" stopColor="#0A74FF" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#23D49B" stopOpacity={0.5} />
                                <stop offset="45%" stopColor="#23D49B" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Area type="monotone" dataKey="uv" stroke="#0A74FF" strokeWidth="0.15rem" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#23D49B" strokeWidth="0.15rem" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="recent">
                <div className="heading">
                    Recent Order
                    <div className="dots"><BsThreeDots /></div>
                </div>
                <div className="project_order">
                    <div className="img"></div>
                    <div className="text">
                        <h4>Project Name</h4>
                        <div className="time">2 mintues ago</div>
                    </div>
                    <div className="price">
                        $400.09
                    </div>
                </div>
                <div className="project_order">
                    <div className="img"></div>
                    <div className="text">
                        <h4>Project Name</h4>
                        <div className="time">2 mintues ago</div>
                    </div>
                    <div className="price">
                        $400.09
                    </div>
                </div>
                <div className="project_order">
                    <div className="img"></div>
                    <div className="text">
                        <h4>Project Name</h4>
                        <div className="time">2 mintues ago</div>
                    </div>
                    <div className="price">
                        $400.09
                    </div>
                </div>
                <div className="project_order">
                    <div className="img"></div>
                    <div className="text">
                        <h4>Project Name</h4>
                        <div className="time">2 mintues ago</div>
                    </div>
                    <div className="price">
                        $400.09
                    </div>
                </div>
            </div>

        </div>
        <div className="Projects">
            <div className="project_wrapper">

                <div className="header">Projects</div>
                <div className="project_title_bar">
                    <span className="grid-item">Photos</span>
                    <span className="grid-item-2 grid-item">Name</span>
                    <span className="grid-item-3 grid-item">Date</span>
                    <span className="grid-item">Type</span>
                    <span className="grid-item">Price</span>
                    <span className="grid-item">Company</span>
                    <span className="grid-item">Status</span>
                    <span className="grid-item grid-item-3">Sales</span>
                    <span className="grid-item">Action</span>
                </div>
                <div className="project_item_bar">
                    <span className="grid-item">
                        <div className="grid-item-first"></div>
                    </span>
                    <span className="grid-item-2 grid-item">Name</span>
                    <span className="grid-item-3 grid-item">Date</span>
                    <span className="grid-item">Type</span>
                    <span className="grid-item">Price</span>
                    <span className="grid-item">Company</span>
                    <span className="grid-item">Status</span>
                    <span className="grid-item grid-item-3">Sales</span>
                    <span className="grid-item">Action</span>
                </div>
                <div className="project_item_bar">
                    <span className="grid-item">
                        <div className="grid-item-first"></div>
                    </span>
                    <span className="grid-item-2 grid-item">Name</span>
                    <span className="grid-item-3 grid-item">Date</span>
                    <span className="grid-item">Type</span>
                    <span className="grid-item">Price</span>
                    <span className="grid-item">Company</span>
                    <span className="grid-item">Status</span>
                    <span className="grid-item grid-item-3">Sales</span>
                    <span className="grid-item">Action</span>
                </div>
            </div>
        </div>
    </>)
}