import "./Dashboard.css";
import { Navigate, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaUserPlus,
  FaUserCheck,
  FaShoppingBag,
  FaShoppingCart,
  FaTruck,
  FaWallet,
  FaCreditCard,
  FaArchive,
  FaTag,
  FaHeart,
  FaGlobe,
  FaBullseye,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import {
  FaRotateLeft,
  FaCircleXmark,
  FaMoneyBill,
  FaChartLine,
  FaTriangleExclamation,
  FaUsersLine,
  FaArrowRightLong,
} from "react-icons/fa6";

import { MdOutlinePending, MdMessage } from "react-icons/md";

import { LuPackage } from "react-icons/lu";

const iconMap = {
  users: FaUsers,
  "user-plus": FaUserPlus,
  "user-check": FaUserCheck,
  "shopping-bag": FaShoppingBag,
  "shopping-cart": FaShoppingCart,
  loader: MdOutlinePending,
  truck: FaTruck,
  "rotate-ccw": FaRotateLeft,
  "x-circle": FaCircleXmark,
  "dollar-sign": FaMoneyBill,
  wallet: FaWallet,
  banknote: FaMoneyBill,
  "trending-up": FaChartLine,
  "credit-card": FaCreditCard,
  package: LuPackage,
  "alert-triangle": FaTriangleExclamation,
  archive: FaArchive,
  tag: FaTag,
  heart: FaHeart,
  "message-square": MdMessage,
  mail: FaEnvelope,
  "users-round": FaUsersLine,
  globe: FaGlobe,
  target: FaBullseye,
};

const dashData = {
  status: true,
  message: "Dashboard data fetched successfully",
  data: [
    {
      id: "total_customers",
      title: "Total Customers",
      value: "1250",
      icon: "users",
      bgColor: "#F3E8FF",
      iconColor: "#9333EA",
      change: "+12%",
      changeType: "increase",
      description: "vs last month",
    },
    {
      id: "new_customers",
      title: "New Customers",
      value: "154",
      icon: "user-plus",
      bgColor: "#E0F2FE",
      iconColor: "#0284C7",
      change: "+8%",
      changeType: "increase",
      description: "This month",
    },
    {
      id: "active_customers",
      title: "Active Customers",
      value: "987",
      icon: "user-check",
      bgColor: "#DCFCE7",
      iconColor: "#16A34A",
      description: "Currently active",
    },
    {
      id: "total_orders",
      title: "Total Orders",
      value: "3482",
      icon: "shopping-bag",
      bgColor: "#DCFCE7",
      iconColor: "#16A34A",
      change: "+8.5%",
      changeType: "increase",
      description: "vs last month",
    },
    {
      id: "pending_orders",
      title: "Pending Orders",
      value: "124",
      icon: "shopping-cart",
      bgColor: "#FCE7F3",
      iconColor: "#EC4899",
      description: "Needs attention",
    },
    {
      id: "processing_orders",
      title: "Processing Orders",
      value: "85",
      icon: "loader",
      bgColor: "#FEF3C7",
      iconColor: "#D97706",
      description: "In progress",
    },
    {
      id: "shipped_orders",
      title: "Shipped Orders",
      value: "2358",
      icon: "truck",
      bgColor: "#FFEDD5",
      iconColor: "#EA580C",
      description: "Completed",
    },
    {
      id: "returned_orders",
      title: "Returned Orders",
      value: "64",
      icon: "rotate-ccw",
      bgColor: "#CCFBF1",
      iconColor: "#0F766E",
      description: "This month",
    },
    {
      id: "cancelled_orders",
      title: "Cancelled Orders",
      value: "27",
      icon: "x-circle",
      bgColor: "#FEE2E2",
      iconColor: "#DC2626",
      description: "This month",
    },
    {
      id: "total_revenue",
      title: "Total Revenue",
      value: "₹2,45,800",
      icon: "dollar-sign",
      bgColor: "#FEF3C7",
      iconColor: "#D97706",
      change: "+15.3%",
      changeType: "increase",
      description: "vs last month",
    },
    {
      id: "today_revenue",
      title: "Today's Revenue",
      value: "₹12,450",
      icon: "wallet",
      bgColor: "#EDE9FE",
      iconColor: "#7C3AED",
      description: "Today",
    },
    {
      id: "monthly_revenue",
      title: "Monthly Revenue",
      value: "₹4,85,000",
      icon: "banknote",
      bgColor: "#ECFCCB",
      iconColor: "#65A30D",
      description: "Current month",
    },
    {
      id: "net_profit",
      title: "Net Profit",
      value: "₹1,47,350",
      icon: "trending-up",
      bgColor: "#DCFCE7",
      iconColor: "#16A34A",
      description: "This month",
    },
    {
      id: "expenses",
      title: "Total Expenses",
      value: "₹98,450",
      icon: "credit-card",
      bgColor: "#DBEAFE",
      iconColor: "#2563EB",
      description: "This month",
    },
    {
      id: "total_products",
      title: "Total Products",
      value: "856",
      icon: "package",
      bgColor: "#DBEAFE",
      iconColor: "#2563EB",
      change: "+6.2%",
      changeType: "increase",
      description: "vs last month",
    },
    {
      id: "out_of_stock",
      title: "Out Of Stock",
      value: "32",
      icon: "alert-triangle",
      bgColor: "#FEE2E2",
      iconColor: "#DC2626",
      description: "Need restock",
    },
    {
      id: "low_stock",
      title: "Low Stock",
      value: "78",
      icon: "archive",
      bgColor: "#FEF3C7",
      iconColor: "#D97706",
      description: "Running low",
    },
    {
      id: "active_offers",
      title: "Active Offers",
      value: "12",
      icon: "tag",
      bgColor: "#FEF3C7",
      iconColor: "#D97706",
      description: "Running now",
    },
    {
      id: "customer_satisfaction",
      title: "Customer Satisfaction",
      value: "4.6/5",
      icon: "heart",
      bgColor: "#F3E8FF",
      iconColor: "#9333EA",
      description: "Based on feedback",
    },
    {
      id: "support_tickets",
      title: "Support Tickets",
      value: "43",
      icon: "message-square",
      bgColor: "#E0F2FE",
      iconColor: "#0284C7",
      description: "Open tickets",
    },
    {
      id: "unread_messages",
      title: "Unread Messages",
      value: "18",
      icon: "mail",
      bgColor: "#FCE7F3",
      iconColor: "#EC4899",
      description: "New messages",
    },
    {
      id: "team_members",
      title: "Team Members",
      value: "24",
      icon: "users-round",
      bgColor: "#EDE9FE",
      iconColor: "#7C3AED",
      description: "Active employees",
    },
    {
      id: "website_visitors",
      title: "Website Visitors",
      value: "24,532",
      icon: "globe",
      bgColor: "#CCFBF1",
      iconColor: "#0F766E",
      description: "This month",
    },
    {
      id: "conversion_rate",
      title: "Conversion Rate",
      value: "3.8%",
      icon: "target",
      bgColor: "#ECFCCB",
      iconColor: "#65A30D",
      description: "Current month",
    },
  ],
};

export const Dashboard = () => {
  let dataFind = dashData.data;
  const navigate = useNavigate();

  return (
    <>
      <div className="panel">
        <div className="main-heading">
          <h1>Good Morning, Admin 👏</h1>
          <p>Here's What's happening with your business today</p>
        </div>
        <div className="dash-wrap">
          {dataFind.map((elm) => {
            const Icon = iconMap[elm.icon];
            return (
              <div className="dash-card" key={elm.id}>
                <div
                  className="icon-box"
                  style={{ backgroundColor: elm.bgColor }}
                >
                  <Icon size={24} color={elm.iconColor} />
                </div>
                <h3>{elm.title}</h3>
                <h1>{elm.value}</h1>
                <div className="merge-container">
                  <div className="merge-box">
                    <span
                      className="percent-box"
                      style={{ color: "#0284C7", backgroundColor: "#DCFCE7" }}
                    >
                      {elm.change}
                    </span>
                    <p>{elm.description}</p>
                  </div>
                  <span
                    className="arrow-box "
                    style={{
                      color: elm.iconColor,
                      backgroundColor: elm.bgColor,
                    }}
                  >
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
