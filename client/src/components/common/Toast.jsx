import {Check} from 'lucide-react'; export default function Toast({message}){return message?<div className="toast"><Check size={16}/>{message}</div>:null}
