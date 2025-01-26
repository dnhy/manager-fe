import Toast, {
  type PluginOptions,
  POSITION,
  useToast,
} from "vue-toastification";

const options: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 2000,
};

export { Toast, options };

export default useToast();
