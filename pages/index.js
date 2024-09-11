// import {
//   Button,
//   Container,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   Text,
//   Textarea,
//   useToast,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { sendContactForm } from "../lib/api";

// const initValues = { name: "", email: "", subject: "", message: "" };

// const initState = { isLoading: false, error: "", values: initValues };

// export default function Home() {
//   const toast = useToast();
//   const [state, setState] = useState(initState);
//   const [touched, setTouched] = useState({});

//   const { values, isLoading, error } = state;

//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({ ...prev, [target.name]: true }));

//   const handleChange = ({ target }) =>
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value,
//       },
//     }));

//   const onSubmit = async () => {
//     setState((prev) => ({
//       ...prev,
//       isLoading: true,
//     }));
//     try {
//       await sendContactForm(values);
//       setTouched({});
//       setState(initState);
//       toast({
//         title: "Message sent.",
//         status: "success",
//         duration: 2000,
//         position: "top",
//       });
//     } catch (error) {
//       setState((prev) => ({
//         ...prev,
//         isLoading: false,
//         error: error.message,
//       }));
//     }
//   };

//   return (
//     <Container maxW="450px" mt={12}>
//       <Heading>Contact</Heading>
//       {error && (
//         <Text color="red.300" my={4} fontSize="xl">
//           {error}
//         </Text>
//       )}

//       <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
//         <FormLabel>Name</FormLabel>
//         <Input
//           type="text"
//           name="name"
//           errorBorderColor="red.300"
//           value={values.name}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
//         <FormLabel>Email</FormLabel>
//         <Input
//           type="email"
//           name="email"
//           errorBorderColor="red.300"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl
//         mb={5}
//         isRequired
//         isInvalid={touched.subject && !values.subject}
//       >
//         <FormLabel>Subject</FormLabel>
//         <Input
//           type="text"
//           name="subject"
//           errorBorderColor="red.300"
//           value={values.subject}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl
//         isRequired
//         isInvalid={touched.message && !values.message}
//         mb={5}
//       >
//         <FormLabel>Message</FormLabel>
//         <Textarea
//           type="text"
//           name="message"
//           rows={4}
//           errorBorderColor="red.300"
//           value={values.message}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <Button
//         variant="outline"
//         colorScheme="blue"
//         isLoading={isLoading}
//         disabled={
//           !values.name || !values.email || !values.subject || !values.message
//         }
//         onClick={onSubmit}
//       >
//         Submit
//       </Button>
//     </Container>
//   );
// }

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  Select,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import axios from "axios";

const initValues = {
  name: "",
  date: "",
  address: "",
  number: "",
  telnumber: "",
  email: "",
  hoaddress: "",
  gstin: "",
  iata: "",
  iatanumber: "",
  iatadate: "",
  proposerName: "",
  proposeremail: "",
  seconderName: "",
  seconderemail: "",
  region: "",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [isIATAAccredited, setIsIATAAccredited] = useState("No");

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      console.log(values);
      await sendContactForm(values);
      // await axios.post("/api/formapi", values);

      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <Container maxW="450px" mt={12}>
      <img
        alt="Your Company"
        src="ACAAI's_Logo.png"
        style={{ height: "150px", margin: "auto" }}
      />
      <Heading mt={10} mb={10}>
        ACTIVE MEMBER APPLICATION FORM
      </Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name of the Company / Firm</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.date && !values.date} mb={5}>
        <FormLabel>Establishment / Incorporation Date</FormLabel>
        <Input
          type="date"
          name="date"
          errorBorderColor="red.300"
          value={values.date}
          onChange={handleChange}
          // onChange={({ target }) => {
          //   handleChange(target);
          //   setState((prev) => ({
          //     ...prev,
          //     values: {
          //       ...prev.values,
          //       date: target.value,
          //     },
          //   }));
          // }}
          onBlur={onBlur}
          max={new Date().toISOString().split("T")[0]}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.address && !values.address}
        mb={5}
      >
        <FormLabel>Full Address</FormLabel>
        <Input
          type="text"
          name="address"
          errorBorderColor="red.300"
          value={values.address}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.number && !values.number}
        mb={5}
      >
        <FormLabel>Mobile Number</FormLabel>
        <Input
          type="number"
          name="number"
          errorBorderColor="red.300"
          value={values.number}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.telnumber && !values.telnumber}
        mb={5}
      >
        <FormLabel>Telephone Number</FormLabel>
        <Input
          type="text"
          name="telnumber"
          errorBorderColor="red.300"
          value={values.telnumber}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email Id of the office applying this application</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.hoaddress && !values.hoaddress}
        mb={5}
      >
        <FormLabel>
          Full address of the Head Office / Registered Office of the Company
        </FormLabel>
        <Input
          type="text"
          name="hoaddress"
          errorBorderColor="red.300"
          value={values.hoaddress}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.gstin && !values.gstin} mb={5}>
        <FormLabel>GSTIN of Head Office / Registered Office</FormLabel>
        <Input
          type="text"
          name="gstin"
          errorBorderColor="red.300"
          value={values.gstin}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.iata && !values.iata} mb={5}>
        <FormLabel>Are you an IATA Accredited Air Cargo Sales Agent?</FormLabel>
        <RadioGroup
          // onChange={setIsIATAAccredited}
          onChange={(value) => {
            setIsIATAAccredited(value);
            setState((prev) => ({
              ...prev,
              values: {
                ...prev.values,
                iata: value,
              },
            }));
          }}
          name="iata"
          type="text"
          value={values.iata}
        >
          <HStack spacing="24px">
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </HStack>
        </RadioGroup>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      {isIATAAccredited === "Yes" && (
        <>
          <FormControl
            // isRequired
            isInvalid={touched.iatanumber && !values.iatanumber}
            mb={5}
          >
            <FormLabel>Please give IATA Approval Number</FormLabel>
            <Input
              type="text"
              name="iatanumber"
              errorBorderColor="red.300"
              value={values.iatanumber}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {/* <FormErrorMessage>Required</FormErrorMessage> */}
          </FormControl>

          <FormControl
            // isRequired
            isInvalid={touched.iatadate && !values.iatadate}
            mb={5}
          >
            <FormLabel>Please give IATA Approval Date</FormLabel>
            <Input
              type="date"
              name="iatadate"
              errorBorderColor="red.300"
              value={values.iatadate}
              onChange={handleChange}
              // onChange={({ target }) => {
              //   handleChange(target);
              //   setState((prev) => ({
              //     ...prev,
              //     values: {
              //       ...prev.values,
              //       iatadate: target.value, // Stores date in YYYY-MM-DD format
              //     },
              //   }));
              // }}
              onBlur={onBlur}
              max={new Date().toISOString().split("T")[0]}
            />
            {/* <FormErrorMessage>Required</FormErrorMessage> */}
          </FormControl>
        </>
      )}

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.proposerName && !values.proposerName}
      >
        <FormLabel>Proposer Name</FormLabel>
        <Input
          type="text"
          name="proposerName"
          errorBorderColor="red.300"
          value={values.proposerName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.proposeremail && !values.proposeremail}
        mb={5}
      >
        <FormLabel>Proposer Email</FormLabel>
        <Input
          type="email"
          name="proposeremail"
          errorBorderColor="red.300"
          value={values.proposeremail}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.seconderName && !values.seconderName}
      >
        <FormLabel>Seconder Name</FormLabel>
        <Input
          type="text"
          name="seconderName"
          errorBorderColor="red.300"
          value={values.seconderName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.seconderemail && !values.seconderemail}
        mb={5}
      >
        <FormLabel>Seconder Email</FormLabel>
        <Input
          type="email"
          name="seconderemail"
          errorBorderColor="red.300"
          value={values.seconderemail}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.region && !values.region}
        mb={5}
      >
        <FormLabel>
          Your Office Region, which is applying for the membership
        </FormLabel>
        {/* <Input
          type="text"
          name="region"
          errorBorderColor="red.300"
          value={values.region}
          onChange={handleChange}
          onBlur={onBlur}
        />        */}
        <Select
          name="region"
          placeholder="Region"
          errorBorderColor="red.300"
          value={values.region}
          onChange={handleChange}
          onBlur={onBlur}
        >
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </Select>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      {/* <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl> */}

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={!values.name || !values.email}
        onClick={onSubmit}
      >
        Submit
      </Button>

      <div style={{ fontSize: "14px", marginTop: "10px" }}>
        <p style={{ color: "#697565" }}>
          Application Developed by Apace Digital Cargo
        </p>
      </div>
    </Container>
  );
}
