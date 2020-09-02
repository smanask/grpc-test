const PROTO_PATH = './notes.proto';
const grpc = require('grpc');
const loader = require('@grpc/proto-loader');
const packageDefinition = loader.loadSync(PROTO_PATH, {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const notesProto = grpc.loadPackageDefinition(packageDefinition);

const NoteService = notesProto.NoteService;
const client = new NoteService('localhost:50051',
    grpc.credentials.createInsecure());

module.exports = client;