import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Pizza from "../../Charts/AdmData";
import Line from "../../Charts/UserData";
import Card from "../../components/Card";

const DashboardCompany = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar 
        title={"Dashboard"}/>
      <Layout>
        <Sidebar />
        <Layout style={{ display: "flex" }}>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                minHeight: "300px",
                maxWidth: "500px",
                padding: "0 10px",
              }}
            >
              <Pizza />
            </div>
            <div
              style={{
                flex: 1,
                minHeight: "300px",
                maxWidth: "700px",
                padding: "0 10px",
              }}
            >
              <Line />
            </div>
          </Layout>
          <Layout
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Card
              style={{}}
              title={"Metas de Saúde e Programas de Incentivo"}
              value={"teste"}
            />
            <Card
              style={{}}
              title={"Metas de Saúde e Programas de Incentivo"}
              value={"teste"}
            />
            <Card
              style={{}}
              title={"Metas de Saúde e Programas de Incentivo"}
              value={"teste"}
            />
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardCompany;
