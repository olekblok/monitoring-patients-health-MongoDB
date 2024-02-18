// Find patient by id
db.patients.findOne({ _id: ObjectId("659ee4f9fac6dd4265774a68") }, { name: 1, age: 1, contact: 1 })

// Find medical history of a given patient by id
db.medical_records.find({ patient_id: ObjectId("659ee4f9fac6dd4265774a68") })

// Monitor real-time health data of a patient
db.sensor_data.findOne({ wearable_device_id: ObjectId("659ee4f9fac6dd4265774a63") }).sort({ timestamp: -1 })

// Aggregate Average Heart Rate per Patient:
db.patients.aggregate([
    { $lookup: { from: "sensor_data", localField: "wearable_device_id", foreignField: "wearable_device_id", as: "sensor_data" } },
    { $unwind: "$sensor_data" },
    { $group: { _id: { patientId: "$_id", patientName: "$name" }, averageHeartRate: { $avg: "$sensor_data.heart_rate" } } },
    { $project: { _id: 0, patientId: "$_id.patientId", patientName: "$_id.patientName", averageHeartRate: 1 } }
  ])
  