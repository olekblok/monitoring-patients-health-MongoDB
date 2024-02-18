db.patients.insertMany([
  { name: "John Doe", age: 45, contact: "123-456-7890", wearable_device_id: ObjectId() },
  { name: "Jane Smith", age: 35, contact: "987-654-3210", wearable_device_id: ObjectId() },
  { name: "Alice Johnson", age: 50, contact: "555-123-4567", wearable_device_id: ObjectId() },
  { name: "Bob Miller", age: 28, contact: "222-987-6543", wearable_device_id: ObjectId() },
  { name: "Eva Davis", age: 65, contact: "111-234-5678", wearable_device_id: ObjectId() },
  { name: "Sam White", age: 42, contact: "333-876-5432", wearable_device_id: ObjectId() }
]);

db.medical_records.insertMany([
  { patient_id: ObjectId("659ee4f9fac6dd4265774a68"), diagnosis: "Hypertension", medications: ["MedA", "MedB"] },
  { patient_id: ObjectId("659ee4f9fac6dd4265774a69"), diagnosis: "Diabetes", medications: ["MedC", "MedD"] },
  { patient_id: ObjectId("659ee4f9fac6dd4265774a6a"), diagnosis: "Asthma", medications: ["InhalerX", "MedE"] },
  { patient_id: ObjectId("659ee4f9fac6dd4265774a6b"), diagnosis: "Allergies", medications: ["AntihistamineY", "NasalSprayZ"] },
  { patient_id: ObjectId("659ee4f9fac6dd4265774a6c"), diagnosis: "Arthritis", medications: ["PainRelieverA", "AntiInflammatoryB"] },
  { patient_id: ObjectId("659ee4f9fac6dd4265774a6d"), diagnosis: "Migraine", medications: ["MigraineMedX", "PainRelieverY"] }
]);

db.sensor_data.insertMany([
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a62"), timestamp: new Date(), heart_rate: 75, steps: 5000 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a63"), timestamp: new Date(), heart_rate: 85, steps: 3000 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a64"), timestamp: new Date(), heart_rate: 72, steps: 6000 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a65"), timestamp: new Date(), heart_rate: 90, steps: 4000 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a66"), timestamp: new Date(), heart_rate: 68, steps: 8000 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a67"), timestamp: new Date(), heart_rate: 78, steps: 7000 }
]);


db.sensor_data.insertMany([
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a62"), timestamp: new Date(), heart_rate: 64, steps: 5576 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a63"), timestamp: new Date(), heart_rate: 87, steps: 5567 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a64"), timestamp: new Date(), heart_rate: 77, steps: 7008 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a65"), timestamp: new Date(), heart_rate: 87, steps: 4567 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a66"), timestamp: new Date(), heart_rate: 75, steps: 9000 },
  { wearable_device_id: ObjectId("659ee4f9fac6dd4265774a67"), timestamp: new Date(), heart_rate: 68, steps: 8000 }
]);
