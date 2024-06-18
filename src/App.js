import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import MainDetails from "./components/MainDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import { useState ,useRef} from "react";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [bankname, setBankname] = useState("");
  const [bankaccount, setBankacccount] = useState("");
  const [clientname, setClientname] = useState("");
  const [clientaddress, setClientaddress] = useState("");
  const [invoicenumber, setInvoicenumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentRef = useRef()
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5  md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      
        {showInvoice ? (
          <>
           <ReactToPrint trigger={()=><button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print/Download </button>}
       content={()=>componentRef.current}/>
          <div ref={componentRef} className="p-5">
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails
              clientname={clientname}
              clientaddress={clientaddress}
            />

            <Dates
              invoicenumber={invoicenumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankaccount={bankaccount}
              bankname={bankname}
            />
          </div>
            <button
              onClick={() => setShowInvoice(false)}
              className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          
          
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center ">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter Your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter Your Adress</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Your Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankname">Enter Your BankName</label>
                  <input
                    type="text"
                    name="bankname"
                    id="bankname"
                    placeholder="Enter Your BankName"
                    autoComplete="off"
                    value={bankname}
                    onChange={(e) => setBankname(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankaccount">
                    Enter Your Bank Account Number
                  </label>
                  <input
                    type="text"
                    name="bankaccount"
                    id="bankaccount"
                    placeholder="Enter Your Bank Account Number"
                    autoComplete="off"
                    value={bankaccount}
                    onChange={(e) => setBankacccount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientname">Enter Your Client Name</label>
                  <input
                    type="text"
                    name="clientname"
                    id="clientname"
                    placeholder="Enter Your Client Name"
                    autoComplete="off"
                    value={clientname}
                    onChange={(e) => setClientname(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 mt-16">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="clientaddress">
                    Enter Your client Address
                  </label>
                  <input
                    type="text"
                    name="clientaddress"
                    id="clientaddress"
                    placeholder="Enter Your Client Address"
                    autoComplete="off"
                    value={clientaddress}
                    onChange={(e) => setClientaddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="invoicenumber">
                    Enter Your Invoice Number
                  </label>
                  <input
                    type="text"
                    name="invoicenumber"
                    id="invoicenumber"
                    placeholder="Enter Your Invoice Number"
                    autoComplete="off"
                    value={invoicenumber}
                    onChange={(e) => setInvoicenumber(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="invoicedate">Enter Your Invoice Date</label>
                  <input
                    type="date"
                    name="invoicedate"
                    id="invoicedate"
                    placeholder="Enter Your Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="website">Enter Your Website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter Your Website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="duedate">Enter Your Due Date</label>
                  <input
                    type="date"
                    name="duedate"
                    id="duedate"
                    placeholder="Enter Your Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
              setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional Notes the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className=" bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
